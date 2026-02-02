function GradeTable({students}){
    return(
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>English</th>
                            <th>Mathematics</th>
                            <th>Science</th>
                            <th>Average</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-base-300">
                                <th></th>
                                {student.map((item, colIndex) => (
                                    <td key={colIndex}>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default GradeTable