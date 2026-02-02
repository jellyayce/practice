import InputDetails from "./InputDetails"

function FormPanel({name, setName, grade1, grade2, grade3, setGrade1, setGrade2, setGrade3 ,addStudent}){
    return(
        <>
            <div className="card w-96 bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                    <InputDetails label={"Student Name"} value={name} onChange={(e) => setName(e.target.value)}/>
                    <InputDetails label={"English"} value={grade1} onChange={(e) => setGrade1(e.target.value)}/>
                    <InputDetails label={"Mathematics"} value={grade2} onChange={(e) => setGrade2(e.target.value)}/>
                    <InputDetails label={"Science"} value={grade3} onChange={(e) => setGrade3(e.target.value)}/>    
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary" onClick={addStudent}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FormPanel