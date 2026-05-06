import Card from "./Card"

export default function CardList() {
  return (
    <div>
      <h1>합성 예제</h1>

      <Card>
        <h2>Card 1</h2>
        <p>This is the first card content.</p>
      </Card>

      <Card>
        <h2>Card 2</h2>
        <p>This is the second card content.</p>
        <button>Click me</button>
      </Card>

      <Card>
        <h2>Card 3</h2>
        <img src="https://placehold.co/100" alt="Placeholder" />
      </Card>
    </div>
  )
}
