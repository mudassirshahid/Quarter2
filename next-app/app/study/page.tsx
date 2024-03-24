// Catch all segments and it is better approach than dynamic routing
// syntax to create folder [...name]
// Benefit of this is we do not face 404 if we write anything in url after http://localhost:3000/study/ this url like http://localhost:3000/study/abc no 404 page error shows the content of [...lecture] file

function studypage() {
  return (
    <div>
      <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">All Lectures</h1>
    </div>
  )
}

export default studypage
