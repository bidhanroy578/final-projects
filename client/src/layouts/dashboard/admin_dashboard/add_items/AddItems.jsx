import TitleAndDes from "../../../../components/title/TitleAndDes.jsx";
import { useForm } from "react-hook-form";
import { GiForkKnifeSpoon } from "react-icons/gi";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const imgbbLink = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (itemData) => {
        // console.log(data)

        //upload image to image hosting service 
        const imgRes = await axiosPublic.post(imgbbLink, { image: itemData.image[0] }, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(imgRes.data.success, imgRes.data.data.display_url)

        // if upload is confirmed then send the item with image url to the database
        if (imgRes.data?.success && imgRes.data?.data?.display_url) {
            itemData.image = imgRes.data.data.display_url
            console.log(itemData)
            axiosSecure.post('/menu', itemData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Success!!!",
                            text: "Item added successfully",
                            confirmButtonColor: '#d1a054'
                        });
                    }
                })
                .catch(err => {
                    console.log(err)
                    Swal.fire({
                        icon: "error",
                        title: "Failed!!!",
                        text: err.message,
                        confirmButtonColor: '#d1a054'
                    });
                })
        }
    }
    return (
        <div className='p-16'>
            <TitleAndDes title={'ADD AN ITEM'} description="What's New ? " />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* recipe name  */}
                <fieldset className="fieldset ">
                    <legend className="fieldset-legend">Recipe Name*</legend>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        className="input w-full"
                        placeholder="enter recipe name"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </fieldset>
                <div className="grid grid-cols-2 gap-6">
                    {/* category  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <select
                            {...register("category", { required: true })}
                            defaultValue="Category"
                            className="select w-full"
                        >
                            <option disabled={true}>Category</option>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                            <option value='offered'>Offered</option>
                        </select>
                        {errors.category && <span className="text-red-500">This field is required</span>}
                    </fieldset>
                    {/* price  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Price*</legend>
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            className="input w-full"
                            placeholder="enter price"
                        />
                        {errors.price && <span className="text-red-500">This field is required</span>}
                    </fieldset>
                </div>
                {/* recipe */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Recipe Details</legend>
                    <textarea
                        className="textarea h-40 w-full"
                        placeholder="Recipe"
                        {...register('recipe', { required: true })}
                    />
                    {errors.recipe && <span className="text-red-500">This field is required</span>}
                </fieldset>
                {/* image  */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Image:</legend>
                    <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        {...register('image', { required: true })}
                    />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </fieldset>
                <button className="mt-4 btn px-8 bg-gradient-to-r from-[#876024] to-[#d09236]">Add Item <GiForkKnifeSpoon /></button>
            </form>
        </div>
    );
};

export default AddItems;