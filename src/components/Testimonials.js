import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, i) => (
      <article key={i} className="message">
        <div className="message-body">
          {testimonial.quote}
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

export default Testimonials;
