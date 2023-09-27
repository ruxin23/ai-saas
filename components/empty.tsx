import Image from "next/image";

interface EmptyProps {
    label: string;
}
const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-20 h-full">
            <div className="relative h-72 w-72">
                <Image src="/empty.png" alt="Empty" fill />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    );
}

export default Empty;