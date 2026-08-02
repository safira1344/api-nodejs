export default function App() {

    return (
        <div className='w-full min-h-screen bg-gray-900 flex justify-center px-4'>
            <main className="my-10 w-full md:max-w-2xl">
                <h1 className="text-4xl font-medium text-white">Clientes</h1>

                <form>
                    <label>Nome:</label>
                    <input 
                    type="text"
                    placeholder="Digite seu nome completo." />
                </form>
            </main>
        </div>
    )
}
