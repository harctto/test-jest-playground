interface IProps {
    title?: string
    onClick?: () => void
}

const Button = ({ title, onClick }: IProps) => {

    return (
        <div data-testid="btn">
            <button
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}

export default Button