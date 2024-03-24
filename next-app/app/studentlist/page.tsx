// Dynamic Routing
import Link from 'next/link'

function StudentListPage() {
  // Array of student names
  const studentNames = ['Muhammad', 'Ali', 'Ahmed', 'Muzammil', 'Mudassir'];
  

  return (
    <div>
      <h1 className="text-center bg-emerald-500 text-3xl p-3 text-black">Student List</h1>
      <div className="flex flex-col justify-center text-center">
        <ul>
          {/* Mapping over the studentNames array to generate list items */}
          {studentNames.map((name, index) => (
            <li key={index}>
              <Link href={`/studentlist/${name.toLowerCase()}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StudentListPage;
