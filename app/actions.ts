"use server";

export async function printTextAction(previousState: any, formData: FormData) {
  const text = formData.get("text");

  return {
    errors: {
      text: !text ? "Text is Required" : undefined,
    }
   };
}
