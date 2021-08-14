import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './Breadcrumbs.css';

const breadcrumbNameMap = {
  '/': 'Profile',
  '/records': 'Records',
};
const Breadcrumbs = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Profile</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
});

export default Breadcrumbs;