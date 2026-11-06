import { Link } from 'react-router-dom'
export function NotFound() {
  return (
    <div className="pt-10">
      <h1>Siden finnes ikke</h1>
      <p className="my-3">Adressen stemmer ikke med noen av sidene i porteføljen.</p>
      <Link to="/" className="pill no-underline">Til forsiden</Link>
    </div>
  )
}
