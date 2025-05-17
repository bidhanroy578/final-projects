const TitleAndDes = ({ title, description }) => {
    return (
        <div className=" my-10 space-y-5 flex flex-col items-center">
            <p className='text-[#D99904]'>--{description}--</p>
            <h3 className='text-4xl border-y-4 border-y-slate-400 p-5 uppercase'>{title}</h3>
        </div>
    );
};
export default TitleAndDes;