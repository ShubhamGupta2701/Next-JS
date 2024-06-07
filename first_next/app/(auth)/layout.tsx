
export default function({children}: {children :  React.ReactNode}){
    return(
        <div>
            <body>
                <div className="border-b p-1 text-center">
                    Login now and get 100% discount on one product of your choice
                </div>
                {children}
            </body>
        </div>
    );
}


