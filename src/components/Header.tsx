type HeaderProps = {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="w-75 mx-auto my-0">
            <h1 className="text-white py-3 fs-2 ps-2">
                {title}
            </h1>
        </div>
    );
};