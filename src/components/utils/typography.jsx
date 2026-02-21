import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

// ============================================================================
// Heading Variants
// ============================================================================

const headingVariants = cva("leading-tight font-big-shoulders font-bold", {
  variants: {
    size: {
      h1: "text-[26px] sm:text-[36px] md:text-[38px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[80px]",
      h2: "text-[22px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[64px]",
      h3: "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[42px] 3xl:text-[48px]",
      h4: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px]",
      h5: "text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[27px]",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

// ============================================================================
// Text Variants
// ============================================================================

const textVariants = cva("leading-normal font-normal", {
  variants: {
    size: {
      p1: "text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px]",
      p2: "text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]",
    },
  },
  defaultVariants: {
    size: "p1",
  },
});

// ============================================================================
// Heading Component
// ============================================================================

/**
 * Heading component for rendering semantic heading elements with consistent styling
 *
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.as='h1'] - HTML heading element to render
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.size='h1'] - Size variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content to render
 * @returns {JSX.Element}
 *
 * @example
 * <Heading size="h1">Main Title</Heading>
 * <Heading as="h2" size="h3">Subtitle</Heading>
 */
function Heading({ as = "h1", className, size = "h1", children, ...props }) {
  const Component = as;

  return (
    <Component className={cn(headingVariants({ size, className }))} {...props}>
      {children}
    </Component>
  );
}

Heading.displayName = "Heading";

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// ============================================================================
// Text Component
// ============================================================================

/**
 * Text component for rendering text elements with consistent typography
 *
 * @param {Object} props - Component props
 * @param {'p'|'span'|'div'|'label'} [props.as='p'] - HTML element to render
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Size variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content to render
 * @returns {JSX.Element}
 *
 * @example
 * <Text size="lg">Large paragraph</Text>
 * <Text as="span" size="sm">Small text</Text>
 */
function Text({ as = "p", className, size = "md", children, ...props }) {
  const Component = as;

  return (
    <Component className={cn(textVariants({ size, className }))} {...props}>
      {children}
    </Component>
  );
}

Text.displayName = "Text";

Text.propTypes = {
  as: PropTypes.oneOf(["p", "span", "div", "label"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// ============================================================================
// Exports
// ============================================================================

export { Heading, Text, headingVariants, textVariants };
