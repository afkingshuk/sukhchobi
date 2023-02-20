import React from "react";
//style
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How do I start?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et dolor id velit mollis bibendum vel at eros. Vestibulum a
              scelerisque eros. Nunc posuere interdum est ut laoreet. Sed
              vestibulum, magna vitae pharetra egestas, risus neque lacinia
              massa, non porttitor arcu ligula nec urna. Praesent feugiat mattis
              felis id dictum. Pellentesque elementum risus at posuere pharetra.
              Suspendisse placerat sapien dui, id vehicula ligula venenatis ac.
              Maecenas maximus vehicula nisl quis sagittis. Suspendisse a nisi
              pulvinar, fringilla urna vulputate, aliquet tortor.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily schedule?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et dolor id velit mollis bibendum vel at eros. Vestibulum a
              scelerisque eros. Nunc posuere interdum est ut laoreet. Sed
              vestibulum, magna vitae pharetra egestas, risus neque lacinia
              massa, non porttitor arcu ligula nec urna. Praesent feugiat mattis
              felis id dictum. Pellentesque elementum risus at posuere pharetra.
              Suspendisse placerat sapien dui, id vehicula ligula venenatis ac.
              Maecenas maximus vehicula nisl quis sagittis. Suspendisse a nisi
              pulvinar, fringilla urna vulputate, aliquet tortor.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Payment methods?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et dolor id velit mollis bibendum vel at eros. Vestibulum a
              scelerisque eros. Nunc posuere interdum est ut laoreet. Sed
              vestibulum, magna vitae pharetra egestas, risus neque lacinia
              massa, non porttitor arcu ligula nec urna. Praesent feugiat mattis
              felis id dictum. Pellentesque elementum risus at posuere pharetra.
              Suspendisse placerat sapien dui, id vehicula ligula venenatis ac.
              Maecenas maximus vehicula nisl quis sagittis. Suspendisse a nisi
              pulvinar, fringilla urna vulputate, aliquet tortor.
            </p>
          </div>
        </Toggle>
        <Toggle title={"How do I start?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et dolor id velit mollis bibendum vel at eros. Vestibulum a
              scelerisque eros. Nunc posuere interdum est ut laoreet. Sed
              vestibulum, magna vitae pharetra egestas, risus neque lacinia
              massa, non porttitor arcu ligula nec urna. Praesent feugiat mattis
              felis id dictum. Pellentesque elementum risus at posuere pharetra.
              Suspendisse placerat sapien dui, id vehicula ligula venenatis ac.
              Maecenas maximus vehicula nisl quis sagittis. Suspendisse a nisi
              pulvinar, fringilla urna vulputate, aliquet tortor.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    font-size: 3rem;
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
