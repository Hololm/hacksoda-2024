Inspiration
In today’s digital landscape, online shoppers are bombarded with endless options, leading to decision fatigue when trying to buy products like phones, skis, or books. Many users spend hours sifting through reviews and specifications, only to remain frustrated or uncertain. We set out to simplify this process by building a tool that delivers personalized, AI-powered product recommendations, empowering users to confidently and quickly make purchasing decisions.

We were also inspired by innovations in AI, cloud scalability, and data-driven insights, with a focus on creating a tool that is accessible and socially responsible, benefiting a wide range of users.

Problem
According to a Federal Trade Commission Data Spotlight, scammers frequently target Amazon, with one in three fraudsters pretending to represent the platform. In just one year, over 96,000 people reported being scammed, leading to total losses exceeding $27 million. Fraud on Amazon includes tactics like fake reviews, counterfeit products, third-party seller scams, phishing, and identity theft. For instance, review hijacking occurs when scammers take over existing 5-star-rated listings to sell fake or low-quality products.

The challenge is that many users don’t thoroughly check reviews or seller information, making them vulnerable to scams.

Solution: Trustify
Trustify is an intelligent browser extension that detects fake or scam sellers on Amazon. By analyzing seller details and calculating a trust score, it helps users avoid fraudulent listings. The trust score is based on factors like seller rating, shipping origin, and whether a product is sold and shipped by Amazon.

Backend:
The system identifies potential scam sellers by detecting outliers such as:

Odd seller names
Newly created accounts
Mixed or suspiciously inconsistent reviews
Sellers with too many unrelated products listed
How It Works:
The Extension takes multiple features and endpoints from Amazon listing ranging from product rating to seller address. It then implements initial basic algorithm to clean and subjectify the data.

After initial distribution the data goes through a Machine Learning Pipeline where we notice trends and analyze different aspects such as review emotion and seller history to finally come up with the Trust Score.

The Trust Score is then displayed next to the product listing, helping users instantly assess seller credibility.

Technical Deep Dive
Frontend:
The extension pop-up provides easy access to trust scores and seller insights on the product page.

Backend:
Amazon seller data is analyzed through machine learning, identifying patterns and outliers to detect potential scams. The extension constantly sends seller information to the backend, where the trust score is calculated in real time.

ML Training:
The system leverages machine learning to refine its trust score algorithm by continuously learning from user feedback and updated seller data.

Challenges We Encountered
Training the AI to ask the right questions and interpret user preferences correctly.
Ensuring scalability to handle large datasets while maintaining high performance.
Vectorizing the product database and accurately scraping data for training the chatbot.
Accomplishments
Successfully developed an AI-powered recommendation engine that simplifies the online shopping experience.
Integrated MongoDB Atlas to manage data efficiently, allowing scalable and fast product queries.
Implemented features that improve accessibility, making the tool user-friendly for individuals with disabilities.
What's Next for Trustify
With further development, Trustify can expand its functionality to other platforms and product categories:

Broaden Product Categories: Add support for additional product categories such as laptops, home appliances, and fashion.
Affiliate Partnerships: Integrate affiliate links for monetization, providing real-time pricing updates from partner e-commerce platforms.
Multi-Language Support: Introduce support for multiple languages, ensuring a global user base can benefit from the tool.
Enhanced Accessibility: Implement advanced voice interfaces and features to further accommodate users with disabilities.
Conclusion
Trustify is designed to revolutionize the way people shop online by offering an intuitive, AI-powered solution that minimizes the risk of falling for online scams. Its scalability, accessibility, and integration of social good make it a forward-thinking tool for the digital shopping age.
