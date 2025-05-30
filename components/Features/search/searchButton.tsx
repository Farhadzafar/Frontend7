"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-primary transition-colors"
      onClick={onClick}
    >
      <Search className="h-5 w-5" />
    </Button>
  );
}
