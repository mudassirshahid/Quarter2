"use client"
function lecture({params}:any) {
    console.log(params);
    
  return (
    <div>
      <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">{params.lecture[0]}</h1>
      <h2 className="text-center bg-emerald-400 text-2xl p-3 text-black">{params.lecture[1]}</h2>
      {/* http://localhost:3000/study/day5/lecture10 above {params.lecture[0]} [0] means day5 as index 0 {params.lecture[1]} [1] means lecture10 as index 1 and indexing start after from last page url like study*/}
    </div>
  )
}

export default lecture


// Catch all segments and it is better approach than dynamic routing
// syntax to create folder [...name]
// Benefit of this is we do not face 404 if we write anything in url after http://localhost:3000/study/ this url like http://localhost:3000/study/abc no 404 page error shows the content of [...lecture] file
// Making url values dynamic that shows in page html use params

