

type CheckBoxProps = {
    onhandleCheckBox: (gender: "male" | "female" | "") => void,
    selectedGerder:"male"|"female"|""
};
const CheckBox = (props:CheckBoxProps) => {
  return (
    <div className="flex text-slate-800 mt-2 items-center ">
        Gender
        <div className="form-control ml-3 ">
            <label className="flex items-center  ">
                <span>Male</span>
                <input type="checkbox" className="checkbox bg-gray-300"
                checked={props.selectedGerder==="male"}
                onChange={()=>props.onhandleCheckBox("male")}
                />
            </label>

        </div>
        <div className="form-control ml-4">
            <label className="flex items-center">
                <span>Female</span>
                <input type="checkbox" className="checkbox bg-gray-300"
                checked={props.selectedGerder==="female"}
                onChange={()=>props.onhandleCheckBox("female")}
                />
            </label>

        </div>
      
    </div>
  )
}

export default CheckBox
