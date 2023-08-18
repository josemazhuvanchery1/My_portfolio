export const sendContactForm = async (data: Object) => {
    try {
        const response = await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        //console.log(response);

        if (!response.ok) {
            throw new Error("Failed to send message");
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};