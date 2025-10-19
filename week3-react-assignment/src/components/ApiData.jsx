import React, { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  if (loading)
    return <p className="text-center mt-10 text-lg font-semibold">Loading data...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>;

  return (
    < Card title="📚 API Data">
    
      {/* Search input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      {/* Data grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <Card key={item.id} title={item.title} description={item.body} />
        ))}
      </div>

      {/* Pagination controls */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button onClick={prevPage} variant="secondary" disabled={currentPage === 1}>
            Prev
          </Button>
          <span className="font-medium dark:text-gray-200">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={nextPage}
            variant="primary"
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* No results */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No posts found.
        </p>
      )}
    </Card>
  );
};

export default ApiData;
