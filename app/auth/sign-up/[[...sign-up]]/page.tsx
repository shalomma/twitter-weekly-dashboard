import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <SignUp
            appearance={{
                elements: {
                  rootBox: "flex items-center justify-center",
                  card: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300",
                  headerTitle: "text-2xl font-bold",
                  headerSubtitle: "text-gray-500 dark:text-gray-400",
                  formButtonPrimary: 
                    "bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity duration-200",
                  formFieldInput: 
                    "rounded-lg border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary dark:bg-gray-900",
                  footerAction: "text-gray-500 dark:text-gray-400",
                  footerActionLink: "text-primary hover:text-primary/80",
                  dividerLine: "bg-gray-200 dark:bg-gray-700",
                  dividerText: "text-gray-500 dark:text-gray-400",
                  identityPreviewText: "text-gray-600 dark:text-gray-300",
                  formField: "space-y-2",
                  formFieldLabel: "font-medium",
                  socialButtonsBlockButton: 
                    "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200",
                  socialButtonsBlockButtonText: "font-medium",
                },
                variables: {
                  borderRadius: '1rem',
                },
              }}
            />
        </div>
    );
}