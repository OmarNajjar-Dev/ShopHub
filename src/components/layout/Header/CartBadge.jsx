// CartBadge.jsx
// Shows the red badge with item count
import PropTypes from 'prop-types';

export default function CartBadge({ count }) {
    if (count <= 0) return null;
    return (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    );
  }

CartBadge.propTypes = {
    count: PropTypes.number.isRequired,
};
  