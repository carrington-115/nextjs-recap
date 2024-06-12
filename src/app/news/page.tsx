"use client";

async function getTopStories() {
  const stories = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.NYT_API}`,
    { cache: "force-cache" }
  );
  if (!stories.ok) throw new Error("data is not available");
  return stories.json();
}

export default async function Page() {
  const topStories = await getTopStories();
  console.log(topStories.results);
  return (
    <div className="w-screen px-20 py-10">
      <span className="w-full flex justify-center mb-10">
        <h1 className="text-3xl font-bold">New York Times Top Stories</h1>
      </span>
      <ul className="grid grid-cols-3 gap-5 w-full font-medium text-black">
        {topStories?.results?.map((story: any, index: number) => (
          <li
            className="list-disc list-outside text-black bg-white px-8 py-4 rounded-md hover:bg-gray-200"
            key={index}
          >
            <a href={story?.url}>{story?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
