import { render, screen } from "@testing-library/react";

import Separator from "../components/Separator";

test("correctly applies the className prop to Separator container", () => {
  const testClassName = "test";
  const text = "foo";
  const { container } = render(
    <Separator className={testClassName}>{text}</Separator>
  );

  const el = container.firstChild;
  expect(el).toHaveClass(testClassName);
});
