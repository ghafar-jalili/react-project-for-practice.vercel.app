import { useRef, useState } from "react";
import SideBar from "./componet/sidebar/SideBar";
import "./style.css"
function App() {

  const [addproject, setAddproject] = useState(false)
  const input = useRef()
  const desc = useRef()
  const date = useRef()
  const [items, setItems] = useState([])
  let maincontent = <button onClick={Project} className='p-4 px-8 font-bold text-gray-200 bg-gray-800 rounded-md'>+ Add Project</button>

  function Project() {
    setAddproject(addproject ? false : true)
  }

  // change button
  function cancel() {
    setAddproject((wachange) => !wachange)
    console.log(addproject)
  }
  function edit() {

  }

  if (!addproject) {
    maincontent =

      <div className="w-[90%]">
        <div className="flex justify-end">
          <button onClick={cancel} className="px-3 py-2 font-bold rounded-md hover:bg-gray-400">cancel</button>
          <button onClick={save} className="p-2 px-8 ml-3 font-bold text-gray-200 bg-gray-800 rounded-md ">save</button>
        </div>
        <div>
          <form action="">
            <label htmlFor="" className="text-xl font-bold text-gray-800">Title</label>
            <br />
            <input ref={input} type="text" required className="w-full px-3 py-2 bg-gray-400 border-2 border-b focus:border-b-black focus:border-2 border-b-white focus:outline-none" />

            <label htmlFor="" className="text-xl font-bold text-gray-800">Description</label>
            <br />
            <input ref={desc} type="text" required className="w-full px-3 py-2 bg-gray-400 border-2 border-b focus:border-b-black focus:border-2 border-b-white focus:outline-none" />

            <label htmlFor="" className="text-xl font-bold text-gray-800">Date</label>
            <br />
            <input ref={date} type="date" required className="w-full px-3 py-2 bg-gray-400 border-2 border-b focus:border-b-black focus:border-2 border-b-white focus:outline-none" />

          </form>
        </div>
      </div>
  }


  // save button
  function save() {
    const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    console.log(color)
    if (input.current.value !== "" && desc.current.value !== "") {
      const newItem = <div style={{ backgroundColor: `${color}` }} className="px-4 py-2 space-y-3 font-bold text-center bg-gray-500 cursor-pointer ">
        <li className={`text-black list-none rounded-md`}>{input.current.value}</li>
        <div className="flex justify-between w-full">
          <span className="text-xs text-black">{desc.current.value}</span>
          <span className="text-xs text-black">{date.current.value}</span>
        </div></div>
      setItems((previtems) => [...previtems, newItem]


      )
      input.current.value = ""
      date.current.value = ""
      desc.current.value = ""
    }
    else {
      setItems((previtem) => [...previtem, <div className="px-4 py-2 font-bold text-center bg-gray-500 cursor-pointer ">
        <li className="text-red-800 list-none ">please add project</li>
      </div>]
      )
    }
  }

  return (
    <div className="flex flex-row w-screen min-h-screen pt-10 overflow-hidden bg-gray-200">
      <div className="bg-black/90 space-y-5 font-poppins rounded-tr-md text-center p-5 w-[25%] text-gray-400 w-100 min-vw-100">
        <h1 className='text-3xl font-bold'>Your Projects</h1>
        <button onClick={Project} className='p-4 px-8 font-bold text-gray-200 bg-gray-800 rounded-md'>+ Add Project</button>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

      </div>

      <div className="flex w-[75%] items-center justify-center">
        {
          maincontent
        }
      </div>

    </div>
  )
}
export default App;