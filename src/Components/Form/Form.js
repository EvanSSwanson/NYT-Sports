import "./Form.css"
import { useSearchParams } from "react-router-dom"

export const Form = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentParams = Object.fromEntries([...searchParams])
  
    const handleChange = (event) => {
      searchParams.set(event.target.id, event.target.value)
      setSearchParams(searchParams)
    };
  
    return (
      <div>
        <form>
          <input
            className="name-field"
            id="name"
            type="text"
            placeholder="Search by name"
            onChange={handleChange}
            value={currentParams.name || ""}
          />
        </form>
      </div>
    );
  }
  
  export default Form