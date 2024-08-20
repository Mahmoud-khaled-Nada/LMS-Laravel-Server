// src/components/InfiniteScrollFiles.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
// src/types.ts
export interface FileData {
  id: number;
  name: string;
  path: string;
  owner: string;
  updated_at: string;
  size: string;
  is_favourite: boolean;
  is_folder: boolean;
}

const fakeFilesData = (page: number): FileData[] => {
  return Array.from({ length: 10 }, (_, index) => ({
    id: index + page * 10,
    name: `File ${index + page * 10}`,
    path: `/path/to/file${index + page * 10}`,
    owner: 'Owner Name',
    updated_at: new Date().toISOString(),
    size: `${(index + 1) * 10} KB`,
    is_favourite: Math.random() > 0.5,
    is_folder: Math.random() > 0.5,
  }));
};

const InfiniteScrollPagination: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastFileRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('load more data');
          // setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    const loadFiles = async () => {
      setLoading(true);
      // Simulate an API call with fake data
      const newFiles = fakeFilesData(page);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setLoading(false);
    };

    loadFiles();
  }, [page]);

  return (
    <div className="file-list">
      <table className="min-w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={file.id} ref={files.length === index + 1 ? lastFileRef : null}>
              <td>{file.name}</td>
              <td>{file.owner}</td>
              <td>{file.updated_at}</td>
              <td>{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollPagination;
