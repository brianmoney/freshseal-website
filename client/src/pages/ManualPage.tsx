import React from 'react';
import { useParams } from 'react-router-dom';

export default function ManualPage() {
  const { manualId } = useParams<{ manualId: string }>();
  
  if (!manualId) {
    return <div>Error: Manual ID is missing.</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{manualId.toUpperCase()} Manual</h1>
      <p>Content for manual {manualId} goes here.</p>
    </div>
  );
}