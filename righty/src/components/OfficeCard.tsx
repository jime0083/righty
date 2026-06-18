import './OfficeCard.css'

export interface OfficeCardData {
  image: string
  title: string
  description: string
}

interface OfficeCardProps {
  card: OfficeCardData
}

export function OfficeCard({ card }: OfficeCardProps) {
  return (
    <article className="office-card">
      <div className="office-card-img">
        <img src={card.image} alt={card.title} />
      </div>
      <div className="office-card-body">
        <h4>{card.title}</h4>
        <p>{card.description}</p>
      </div>
    </article>
  )
}
