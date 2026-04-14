function Header() {
    return (
        <div>
            <header className="bg-linear-to-br from-[#fef08a] via-[#e9ca95] to-[#f7af78] flex items-center  rounded-xl shadow h-30 border border-amber-500/50 ">
                <div>
                    <img className="w-50 rounded-full" src="/src/assets/logo.jpg"></img>
                </div>
                <div className="flex gap-5 ml-150">
                    <button> Acomodações </button>
                    <button> Experências  </button>
                    <button> Serviços </button>
                </div>
                <div className="ml-180">
                    <button> torne-se um anfitrião</button>
                </div>
            </header>

        </div>
    )
}
export default Header