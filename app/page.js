import LikeButton from './like-button';

function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({title}) {
    console.log("This is the value of props 👉", title)
    return <h1> {title ? title : 'Default title'} </h1>
}

export default function HomePage() {
    const names = ["Jerry", "Tommy", "Jack"]

    return (
        <div>
            <Header title="Develop. Eat. Preview. Ship!"/>
            <ul>
            {
                names.map((name) => (
                    <li key={name}>{name}</li>
                ))
            }
            </ul>
            <LikeButton/>
        </div>
    );
}

// root.render(<HomePage/>)