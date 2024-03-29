import Card from "./Card"
function ServiceSection({ data }) {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-16">
          {data.map(service => (
          <Card
              key={service.id}
              title={service.title}
              description={service.description}
          />
          ))}
      </div>
  )
}

export default ServiceSection
