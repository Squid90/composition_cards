import { FC } from 'react'


interface ICard {
    title: string;
    text: string;
}

export const Card: FC<ICard> = (data) => {
    const {title, text} = data
  return (
    <>
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div>
    </div>
    </>
  )
}
