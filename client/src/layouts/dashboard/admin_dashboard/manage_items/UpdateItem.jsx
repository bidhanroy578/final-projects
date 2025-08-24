import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { GiForkKnifeSpoon } from "react-icons/gi";

const UpdateItem = () => {

    const axiosSecure = useAxiosSecure()
    const { image, recipe, price, category, name, _id } = useLoaderData()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (itemData) => {
        // console.log(data)


        console.log(itemData)
        axiosSecure.patch(`/menu/${_id}`, itemData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!!!",
                        text: "Item updated successfully",
                        confirmButtonColor: '#d1a054'
                    });
                }
                if (res.data.acknowledged && res.data.modifiedCount === 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Opps!!!",
                        text: 'Item is not updated , Same info provided',
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

    return (
        <div className="p-16">
            <h1 className="mb-6">Update Item</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* item image  */}
                <div className="avatar">
                    <div className="mask mask-squircle h-16 w-16">
                        <img src={image} />
                    </div>
                </div>
                {/* recipe name  */}
                <fieldset className="fieldset ">
                    <legend className="fieldset-legend">Recipe Name*</legend>
                    <input
                        defaultValue={name}
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
                            defaultChecked={category}
                            {...register("category", { required: true })}
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
                            defaultValue={price}
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
                        defaultValue={recipe}
                        {...register('recipe', { required: true })}
                    />
                    {errors.recipe && <span className="text-red-500">This field is required</span>}
                </fieldset>
                <button className="mt-4 btn px-8 bg-gradient-to-r from-[#876024] to-[#d09236]">Add Item <GiForkKnifeSpoon /></button>
            </form>

        </div>
    );
};

export default UpdateItem;