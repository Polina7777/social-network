export interface MainProps {
    type?: 'authorizationPage'|'accountSearchPage'|'registrationPage';
    className?: string;
    text?: string;
    children?: React.ReactNode;
}