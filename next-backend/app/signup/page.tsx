export default function(){
    return <div>
        <div className="h-screen flex justify-center flex-col ">
            <div className="flex justify-center">
                <div className="">
                    <div className="border border-black p-2 rounded m-4">
                        <input type="text" placeholder="email"/>
                    </div>
                    <div className="border border-black p-2 rounded m-4">
                        <input type="password" placeholder="password"/>
                    </div>
                    <div>
                        <button className="border border-black p-2 mx-24 rounded mt-4">Signup</button>      
                    </div>
                </div>
            </div>
        </div>
    </div>
}