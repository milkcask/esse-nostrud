import React from 'react'
import { useStyletron } from "styletron-react";

import {
  Card,
  StyledBody,
  // StyledThumbnail
} from "baseui/card";
import Star from "./Star";

export default function ProductCard(props) {
  const {
    name,
    id,
    description,
    seller_name,
    last_updated,
    location,
    available_count,
    price,
    star_rating,
    review_count
  } = props.productData;
  const [css] = useStyletron();

  return (
    <Card
      title={name}
      headerImage={`https://source.unsplash.com/user/erondu/1600x900?${id}`}
    >
      {/* <StyledThumbnail src={`https://source.unsplash.com/user/erondu/512x512?${id}`} /> */}
      <StyledBody>
        <p>
          <span className={css({
            fontWeight: '800',
            fontSize: "2em"
          })}>{price}</span>
          <span> {available_count} left</span>
        </p>
        <p>
          {`by ${seller_name} from ${location} `}
          <br />
          <Star rating={star_rating} />
          ({review_count})
        </p>
        <p>{description}</p>
        <p>{last_updated}</p>
      </StyledBody>
    </Card>
  )
}
