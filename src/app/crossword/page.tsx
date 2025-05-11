"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Check, HelpCircle, RefreshCw } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

// Sample crossword puzzle data
const puzzleData = {
  grid: [
    ["", "", "1", "", "", "2", "", "", ""],
    ["", "3", "", "", "", "", "", "", ""],
    ["4", "", "", "", "5", "", "", "", ""],
    ["", "", "", "", "", "", "6", "", ""],
    ["7", "", "", "", "", "", "", "", "8"],
    ["", "", "9", "", "", "", "", "", ""],
    ["", "", "", "", "10", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["11", "", "", "", "", "", "", "", ""],
  ],
  across: {
    "1": { clue: "Major news organization (3)", answer: "CNN" },
    "3": { clue: "Publication released daily (9)", answer: "NEWSPAPER" },
    "4": { clue: "Person who reports news (9)", answer: "JOURNALIST" },
    "7": { clue: "Short news piece (7)", answer: "ARTICLE" },
    "9": { clue: "Front page news (8)", answer: "HEADLINE" },
    "10": { clue: "News opinion piece (8)", answer: "EDITORIAL" },
    "11": { clue: "Person who writes columns (9)", answer: "COLUMNIST" },
  },
  down: {
    "1": { clue: "Breaking news platform (6)", answer: "CHANNEL" },
    "2": { clue: "Visual news element (5)", answer: "PHOTO" },
    "5": { clue: "News source (5)", answer: "MEDIA" },
    "6": { clue: "Television news segment (6)", answer: "REPORT" },
    "8": { clue: "News investigation (5)", answer: "STORY" },
  },
};

export default function CrosswordPage() {
  const isMobile = useMobile();
  const [userAnswers, setUserAnswers] = useState<string[][]>(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill("")),
  );
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );
  const [direction, setDirection] = useState<"across" | "down">("across");
  const [completed, setCompleted] = useState(false);
  const gridRefs = useRef<(HTMLInputElement | null)[][]>(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)),
  );

  // Check if the puzzle is completed
  useEffect(() => {
    const isComplete =
      Object.entries(puzzleData.across).every(([key, clue]) => {
        // Implementation would check if all cells for this clue are correctly filled
        return true; // Simplified for this example
      }) &&
      Object.entries(puzzleData.down).every(([key, clue]) => {
        // Implementation would check if all cells for this clue are correctly filled
        return true; // Simplified for this example
      });

    setCompleted(isComplete);
  }, [userAnswers]);

  // Handle cell selection
  const handleCellClick = (row: number, col: number) => {
    if (puzzleData.grid[row][col] === "") return;

    if (selectedCell && selectedCell[0] === row && selectedCell[1] === col) {
      // Toggle direction if clicking the same cell
      setDirection(direction === "across" ? "down" : "across");
    } else {
      setSelectedCell([row, col]);
    }
  };

  // Handle keyboard input
  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === "ArrowRight") {
      moveToNextCell(row, col, 0, 1);
    } else if (e.key === "ArrowLeft") {
      moveToNextCell(row, col, 0, -1);
    } else if (e.key === "ArrowDown") {
      moveToNextCell(row, col, 1, 0);
    } else if (e.key === "ArrowUp") {
      moveToNextCell(row, col, -1, 0);
    } else if (e.key === "Backspace") {
      const newAnswers = [...userAnswers];
      newAnswers[row][col] = "";
      setUserAnswers(newAnswers);

      // Move to previous cell
      if (direction === "across") {
        moveToNextCell(row, col, 0, -1);
      } else {
        moveToNextCell(row, col, -1, 0);
      }
    }
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    row: number,
    col: number,
  ) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 1 && /^[A-Z]?$/.test(value)) {
      const newAnswers = [...userAnswers];
      newAnswers[row][col] = value;
      setUserAnswers(newAnswers);

      if (value !== "") {
        // Move to next cell
        if (direction === "across") {
          moveToNextCell(row, col, 0, 1);
        } else {
          moveToNextCell(row, col, 1, 0);
        }
      }
    }
  };

  // Move to next valid cell
  const moveToNextCell = (
    row: number,
    col: number,
    rowOffset: number,
    colOffset: number,
  ) => {
    let newRow = row + rowOffset;
    let newCol = col + colOffset;

    // Find the next valid cell
    while (newRow >= 0 && newRow < 9 && newCol >= 0 && newCol < 9) {
      if (puzzleData.grid[newRow][newCol] !== "") {
        setSelectedCell([newRow, newCol]);
        gridRefs.current[newRow][newCol]?.focus();
        return;
      }
      newRow += rowOffset;
      newCol += colOffset;
    }
  };

  // Reset the puzzle
  const resetPuzzle = () => {
    setUserAnswers(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill("")),
    );
    setSelectedCell(null);
    setCompleted(false);
  };

  // Check if a cell is part of the current selection
  const isCellInCurrentWord = (row: number, col: number) => {
    if (!selectedCell) return false;

    const [selRow, selCol] = selectedCell;

    if (direction === "across") {
      // Check if in same row and part of a word
      if (row === selRow) {
        // Find the start of the word
        let startCol = selCol;
        while (startCol > 0 && puzzleData.grid[row][startCol - 1] !== "") {
          startCol--;
        }

        // Find the end of the word
        let endCol = selCol;
        while (endCol < 8 && puzzleData.grid[row][endCol + 1] !== "") {
          endCol++;
        }

        return col >= startCol && col <= endCol;
      }
    } else {
      // Check if in same column and part of a word
      if (col === selCol) {
        // Find the start of the word
        let startRow = selRow;
        while (startRow > 0 && puzzleData.grid[startRow - 1][col] !== "") {
          startRow--;
        }

        // Find the end of the word
        let endRow = selRow;
        while (endRow < 8 && puzzleData.grid[endRow + 1][col] !== "") {
          endRow++;
        }

        return row >= startRow && row <= endRow;
      }
    }

    return false;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b px-4 sm:px-6 lg:px-8">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold">
              DailyNews
            </Link>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Daily Crossword</h1>
          <p className="text-muted-foreground text-center max-w-[600px]">
            Test your knowledge with our news-themed crossword puzzle. Fill in
            the grid with the correct answers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px] px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Crossword Puzzle</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={resetPuzzle}>
                    <RefreshCw className="h-4 w-4 mr-2" /> Reset
                  </Button>
                  <Button size="sm">
                    <Check className="h-4 w-4 mr-2" /> Check Answers
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                Fill in the grid with the correct answers based on the clues.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="grid grid-cols-9 gap-0 border border-border">
                  {puzzleData.grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 border border-border flex items-center justify-center ${
                          cell === ""
                            ? "bg-muted"
                            : selectedCell &&
                                selectedCell[0] === rowIndex &&
                                selectedCell[1] === colIndex
                              ? "bg-primary/20"
                              : isCellInCurrentWord(rowIndex, colIndex)
                                ? "bg-primary/10"
                                : isCellInCurrentWord(rowIndex, colIndex)
                                  ? "bg-primary/10"
                                  : ""
                        }`}
                      >
                        {cell !== "" && (
                          <span className="absolute top-0 left-0.5 text-xs font-medium">
                            {cell}
                          </span>
                        )}
                        {cell !== "" && (
                          <input
                            ref={(el) =>
                              (gridRefs.current[rowIndex][colIndex] = el)
                            }
                            type="text"
                            maxLength={1}
                            value={userAnswers[rowIndex][colIndex]}
                            onChange={(e) =>
                              handleInputChange(e, rowIndex, colIndex)
                            }
                            onKeyDown={(e) =>
                              handleKeyDown(e, rowIndex, colIndex)
                            }
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                            className={`w-full h-full text-center font-medium bg-transparent focus:outline-none ${
                              selectedCell &&
                              selectedCell[0] === rowIndex &&
                              selectedCell[1] === colIndex
                                ? "text-primary"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                    )),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <Tabs defaultValue="across">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="across">Across</TabsTrigger>
                <TabsTrigger value="down">Down</TabsTrigger>
              </TabsList>
              <TabsContent value="across" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Across Clues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {Object.entries(puzzleData.across).map(
                        ([number, clue]) => (
                          <li key={number} className="flex gap-2">
                            <span className="font-bold">{number}.</span>
                            <span>{clue.clue}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="down" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Down Clues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {Object.entries(puzzleData.down).map(([number, clue]) => (
                        <li key={number} className="flex gap-2">
                          <span className="font-bold">{number}.</span>
                          <span>{clue.clue}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  How to Play
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Click on a cell to select it</li>
                  <li>• Type letters to fill in the puzzle</li>
                  <li>
                    • Click a cell twice to switch between across and down
                  </li>
                  <li>• Use arrow keys to navigate between cells</li>
                  <li>• Press backspace to delete a letter</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More Puzzles</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Yesterday's Crossword</CardTitle>
                <CardDescription>
                  Try the previous day's challenge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Play Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Sudoku</CardTitle>
                <CardDescription>Test your logic skills</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Play Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Word Search</CardTitle>
                <CardDescription>Find hidden words in the grid</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Play Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DailyNews. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
