import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Is Welcome mounting correctly", () => {
  it("welcome correctly", () => {
    render(<App />);
    const welcome = screen.getByText(/benvenuti in epibooks!/i);
    expect(welcome).toBeInTheDocument();
  });

  /*  it("Is Allthebook ok ", () => {
    render(<App />);

  }); */

  it("Is CommentArea mounting correctly", () => {
    render(<App />);
    const commentAreaInputField = screen.getByPlaceholderText(/inserisci qui il testo/i);
    expect(commentAreaInputField).toBeInTheDocument();
  });
});

describe("Is selectedSingleBook red ", () => {
  it("border red", () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId("card");
    const bookCard = allTheBookCards[0];
    fireEvent.click(bookCard);
    expect(bookCard).toHaveStyle("border: 3px solid red");
  });

  it("normal border", () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId("card");
    const bookCard = allTheBookCards[0];
    fireEvent.click(bookCard);
    expect(bookCard).toHaveStyle("border: 3px solid red");
    const newBookCard = allTheBookCards[1];
    fireEvent.click(newBookCard);
    expect(bookCard).not.toHaveStyle("border: 3px solid red");
  });
});

describe("Is CommentList correctly  ", () => {
  it("no comments ", () => {
    render(<App />);
    const comments = screen.queryAllByTestId("comment");
    expect(comments).toHaveLength(0);
  });
});
