export const metadata = {
    title: "Susan Coffee",
    description: "Coffee shop management system",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/CSS/style.css" />
                <link rel="stylesheet" href="/CSS/admin.css" />
            </head>
            <body>{children}</body>
        </html>
    );
}
