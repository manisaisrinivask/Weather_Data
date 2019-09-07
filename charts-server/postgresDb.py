import psycopg2
from config import config
 
def connect():
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config()
        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
      
        # create a cursor
        cur = conn.cursor()
        
        # execute a statement
        cur.execute("""SELECT * FROM life_death_rate""")
    
        records = cur.fetchall()
        return records

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    
    finally:
        if conn is not None:
            cur.close()
            conn.close()
            print('Database connection closed.')

 
if __name__ == '__main__':
    connect()