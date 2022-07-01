import HeaderNotNavBar from './HeaderNotNavBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <HeaderNotNavBar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
