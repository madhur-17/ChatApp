

const CheckBox = () => {
  return (
    <div className="flex text-slate-800 mt-2 items-center ">
        Gender
        <div className="form-control ml-3 ">
            <label className="flex items-center">
                <span>Male</span>
                <input type="checkbox" className="checkbox bg-gray-300"/>
            </label>

        </div>
        <div className="form-control ml-4">
            <label className="flex items-center">
                <span>Female</span>
                <input type="checkbox" className="checkbox bg-gray-300"/>
            </label>

        </div>
      
    </div>
  )
}

export default CheckBox
