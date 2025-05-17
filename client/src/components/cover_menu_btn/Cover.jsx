const Cover = ({ img, title, description }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='flex justify-center items-center h-[80vh] bg-cover bg-center bg-fixed'>
            <div className="text-white bg-black/40 p-10 min-w-[70%] h-[50%] flex flex-col gap-5 justify-center items-center">
                <h3 className="uppercase font-bold text-4xl md:text-7xl">{title}</h3>
                <p className="font-semibold text-xl text-center">{description ? description : 'WOULD YOU LIKE TO TRY A DISH?'}</p>
            </div>
        </div>
    );
};

export default Cover;