import { Button, Input, Table, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ResourceList.scss';
import usePokemonList, { PokemonSummary } from "../../hooks/usePokemonList";

const ITEMS_PER_PAGE = 10;

const ResourceList = () => {
  const { resources } = usePokemonList();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const filtered = resources.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="resource-list-container">
      <Button variant="outline" onClick={() => navigate(-1)} mb="md">
        ← Back
      </Button>

      <h1>Pokemon List</h1>

      <Input
        placeholder="Search by name"
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
          setPage(1);
        }}
        className="resource-input"
        mb="md"
      />

      <Table highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((res: PokemonSummary, index) => {
            const id = res.url.split("/").filter(Boolean).pop();
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{res.name}</td>
                <td>
                  <Button size="xs" onClick={() => navigate(`/resources/${res.name}`)}>
                    View
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Group position="center" mt="md">
        <Button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button onClick={handleNext} disabled={page === totalPages}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default ResourceList;
