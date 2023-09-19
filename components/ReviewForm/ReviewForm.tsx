import { ReviewFormProps } from "./ReviewFormProps";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { P, H, Rating, Textarea, Input, Button } from "../components";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({productId, isOpened, className, ...props}: ReviewFormProps):JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId });
      if(data.message) {
        setIsSuccess(true);
        reset;
      } else {
        setIsError("Кринж, не работает");
      }
    } catch (e) {
        setIsError(e.message);
    }
	};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(className, styles.reviewForm)}>
        <Input 
          {...register('name', { required: { value: true, message: 'Поле обязательно' }})} 
          error={errors.name}
          placeholder="Имя"
          tabIndex={isOpened ? 0 : -1}
        />
        <Input 
          {...register('title', { required: { value: true, message: 'Поле обязательно' }})} 
          error={errors.name}
          placeholder="Заголовок отзыва"
          tabIndex={isOpened ? 0 : -1} 
        />
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller 
            control={control} 
            name='rating'
            rules={{required: {value: true, message: 'Рейтинг обязателен'}}}
            render={({ field }) => (
              <Rating 
                isEditable 
                error={errors.rating} 
                rating={field.value} 
                ref={field.ref} 
                setRating={field.onChange}
                tabIndex={isOpened ? 0 : -1} 
              />
            )}
          />
        </div>
        <Textarea 
          {...register('description', { required: { value: true, message: 'Поле обязательно' }})} 
          placeholder="Текст отзыва" 
          error={errors.description}
          className={styles.textarea} 
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && <div className={styles.success}>
        <H tag="h4" className={styles.successTitle}>Ваш отзыв отправлен</H>
        <P size="small">Спасибо, ваш отзыв будет опубликован после проверки</P>
        <span className={cn('material-symbols-outlined', styles.successClose)} onClick={() => setIsSuccess(false)}>close</span>
      </div>}
      {error && <div className={styles.error}>
        <span>Что-то не так, попробуйте обновить страницу</span>
        <span className={cn('material-symbols-outlined', styles.errorClose)} onClick={() => setIsError('')}>close</span>
      </div>}
    </form>
  );
};