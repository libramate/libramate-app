import { ArrowLeft24Regular, Edit24Regular } from "@fluentui/react-icons";
import "./BookDetails.scss";

interface propsBookDetails {
  // bookTitle: String;
}

export default function BookDetails(props: propsBookDetails) {
  return (
    <div id="book-details">
      <div id="details-title-bar">
        <button className="icon-button">
          <ArrowLeft24Regular fill="var(--color-font)" />
        </button>
        <button className="icon-button">
          <Edit24Regular fill="var(--color-font)" />
        </button>
      </div>
      <div id="details-info">
        <img
          id="details-cover"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg/220px-Dune-Frank_Herbert_%281965%29_First_edition.jpg"
        ></img>
        <div id="details-data">
          <h1>Dune</h1>
          <p id="details-author">Frank Herbert</p>

          <hr />

          <table>
            <tbody>
              <tr>
                <td>Year</td>
                <td>1965</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td>ISBN</td>
                <td>978-1111-1111-11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  // <>Book Details</>;
}
