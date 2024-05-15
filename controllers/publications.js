import Publication from '../models/Publication'; // Import the Publication model

export async function createPublication(req, res) {
    // Extract data from the request body
    const { title, content, attachment, userId, nbLikes, comments } = req.body;

        // Create a new publication instance
        const newPublication = new Publication({
            title,
            content,
            attachment,
            userId,
            nbLikes,
            comments
        });

        // Save the new publication to the database
        const savedPublication = await newPublication.save();

        // Respond with success message and the created publication
        res.status(201).json({
            message: "Publication created successfully!",
            publication: savedPublication 
        });
}
