import { useForm, FormProvider, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IForm, FormErrors } from './types';
import { Transition } from '../Transition';
import { AuthForm } from './AuthForm';
import { CreateForm } from './CreateForm';

export const Form = ({
  title,
  text,
  schema,
  selectOptions,
  selectName,
  onSubmit,
}: IForm) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <Transition>
      <FormProvider {...methods}>
        {title === 'Login' || title === 'Register' ? (
          <AuthForm
            title={title}
            text={text}
            selectOptions={selectOptions}
            selectName={selectName}
            errors={errors as FormErrors}
            onSubmit={handleSubmit(onSubmit)}
          />
        ) : (
          <CreateForm
            title={title}
            text={text}
            selectOptions={selectOptions}
            selectName={selectName}
            errors={errors as FormErrors}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}
      </FormProvider>
    </Transition>
  );
};

// import { useForm, FormProvider, FieldError } from 'react-hook-form';
// import { AnyObjectSchema } from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Input } from './Input';
// import { Select, SelectOptions } from './Select';
// import { Link } from './Link';
// import { TextArea } from './TextArea';
// import { Transition } from '../Transition';
// import { Button, HomeButton, BackButton } from '../Button';
// import {
//   FormWrapper,
//   FormContainer,
//   FormContent,
//   FormTitle,
//   FormText,
// } from './styles';

// interface FormProps {
//   formType: 'register' | 'login' | 'ticket';
//   title: string;
//   text: string;
//   schema: AnyObjectSchema;
//   selectOptions?: SelectOptions;
//   selectName?: string;
//   onSubmit: (data: any) => void;
// }

// export const Form = ({
//   formType,
//   title,
//   text,
//   schema,
//   selectOptions,
//   selectName,
//   onSubmit,
// }: FormProps) => {
//   const methods = useForm({
//     resolver: yupResolver(schema),
//     mode: 'all',
//   });
//   const {
//     handleSubmit,
//     formState: { errors },
//   } = methods;

//   return (
//     <Transition>
//       <BackButton />
//       <HomeButton />
//       <FormProvider {...methods}>
//         <FormWrapper typeOfForm={formType === 'ticket' ? 'create' : 'auth'}>
//           <FormContainer>
//             <FormContent onSubmit={handleSubmit(onSubmit)}>
//               <FormTitle>
//                 <h1>{title}</h1>
//                 <FormText>{text}</FormText>
//               </FormTitle>
//               {formType === 'register' && (
//                 <Input type="username" errors={errors.username as FieldError} />
//               )}
//               {formType !== 'ticket' && (
//                 <>
//                   <Input type="email" errors={errors.email as FieldError} />
//                   <Input
//                     type="password"
//                     errors={errors.password as FieldError}
//                   />
//                 </>
//               )}
//               {selectOptions && (
//                 <Select
//                   name={selectName as string}
//                   options={selectOptions as SelectOptions}
//                   errors={errors.team as FieldError}
//                 />
//               )}
//               {formType === 'ticket' && (
//                 <TextArea
//                   type="message"
//                   errors={errors.description as FieldError}
//                 />
//               )}
//               <Button
//                 text={formType === 'ticket' ? 'Create' : formType.toUpperCase()}
//               />
//               {formType !== 'ticket' && <Link type={formType} />}
//             </FormContent>
//           </FormContainer>
//         </FormWrapper>
//       </FormProvider>
//     </Transition>
//   );
// };
