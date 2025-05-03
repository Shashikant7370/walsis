import Link from "next/link.js";
import { data } from "../../../../data/dummy";

export default function QuizDetailPage({ params }) {
  const id = params.id;
  const quiz = data.find((item) => item.id.toString() === id);
  return (
    <div className="min-h-screen bg-[#0f2a36] text-white flex flex-col items-center justify-center space-y-6">
      {quiz ? (
        <>
          <div className="rounded-lg w-[400px] flex flex-col items-center justify-center space-y-6 p-4 ">
            <img src={quiz.img} className="w-90 md:w-94 rounded-lg " />
            <h1 className="text-2xl font-bold text-yellow-400">{quiz.desc}</h1>
            <p className="text-xl">
              Dificulty level :{" "}
              <span className="text-green-600 p-2 bg-white">Easy</span>
            </p>
            <p className="text-xl">
              ♂️ Total Questions : {quiz.carlogo.length}
            </p>
            <Link href={`/home/${quiz.id}/quiz`}>
              <button className="bg-yellow-400 w-90 cursor-pointer text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-103">
                Play Quiz
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-red-500">Quiz not found.</p>
      )}
    </div>
  );
}
